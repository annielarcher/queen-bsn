import data from './placeholder-images.json';

export type ImageAsset = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type VideoAsset = {
  id: string;
  description: string;
  embedId: string;
  source: 'youtube' | 'vimeo';
  thumbnailId: string;
};

export const ImageAssets: ImageAsset[] = data.images;
export const VideoAssets: VideoAsset[] = data.videos;
