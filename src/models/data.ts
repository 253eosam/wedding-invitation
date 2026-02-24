import rawConfig from '../../wedding.config.json'
import type { WeddingConfig } from '@/models/model'

const isProd = process.env.NODE_ENV === 'production'

const mapperBuildPath = (path: string) => {
  const publicPrefix = '/wedding-invitation'
  const isAbsoluteUrl = /^(https?:)?\/\//.test(path)

  if (!isProd || isAbsoluteUrl || !path.startsWith('/')) {
    return path
  }

  return publicPrefix + path
}

const rawTypedConfig = rawConfig as WeddingConfig

const config: WeddingConfig = {
  ...rawTypedConfig,
  meta: {
    ...rawTypedConfig.meta,
    thumbnailImage: mapperBuildPath(rawTypedConfig.meta.thumbnailImage),
  },
  intro: {
    ...rawTypedConfig.intro,
    image: mapperBuildPath(rawTypedConfig.intro.image),
  },
  invitation: {
    ...rawTypedConfig.invitation,
    images: rawTypedConfig.invitation.images.map(mapperBuildPath),
  },
  mainImage: mapperBuildPath(rawTypedConfig.mainImage),
  gallery: rawTypedConfig.gallery.map((item) => ({
    ...item,
    src: mapperBuildPath(item.src),
  })),
  bgm: mapperBuildPath(rawTypedConfig.bgm),
}

export default config
