/* eslint-disable */
// @ts-nocheck

import "server-only";
import { decode, encode } from "blurhash";
import sizeOf from "image-size";
import sharp from "sharp";

export interface IOutput {
  encoded: string;
  width: number;
  height: number;
  format: string;
}

export const getBlurhash = async (source: string): Promise<IOutput> => {
  const size = 32;

  const response = await fetch(source);
  const arrayBuffer = await response.arrayBuffer();
  const returnedBuffer = Buffer.from(arrayBuffer);

  const { width: remoteWidth, height: remoteHeight } = sizeOf(returnedBuffer);

  const { info, data } = await sharp(returnedBuffer)
    .resize(size, size, {
      fit: "inside",
    })
    .ensureAlpha()
    .raw()
    .toBuffer({
      resolveWithObject: true,
    });

  const encoded = encode(
    new Uint8ClampedArray(data),
    info.width,
    info.height,
    4,
    4,
  );

  const output: IOutput = {
    encoded,
    width: remoteWidth!,
    height: remoteHeight!,
    format: info.format,
  };

  return output;
};

function parsePixels(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  format: string,
) {
  return sharp(pixels, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .toFormat(format)
    .toBuffer()
    .then((data) => `data:image/${format};base64,${data.toString("base64")}`);
}

export async function blurHashToDataURL(
  hash: string | undefined,
  format: string = "png",
): Promise<string | undefined> {
  if (!hash) return undefined;

  const pixels = decode(hash, 32, 32);
  return parsePixels(pixels, 32, 32, format);
}

export const getBase64 = async (src: string) => {
  const result = await getBlurhash(src);
  const dataURL = await blurHashToDataURL(result.encoded, result.format);
  return {
    url: dataURL,
    width: result.width,
    height: result.height,
    format: result.format,
  };
};
