import sharp from 'sharp';
import path from 'path';

const resize = async (name: string, width: number, height: number): Promise<boolean | undefined> => {
  try {
    const imgLocation = path.resolve(`images/original/${name}.jpg`);
    const outputFile = path.resolve(`images/resized/${name}_${width}_${height}.jpg`);
    await sharp(imgLocation).resize(width, height).toFormat('jpg').toFile(outputFile);
    return true;
  } catch (error) {
    throw new Error(`${error as Error}`);
  }
};

export default resize;
