import { Image, View } from 'react-native'

interface IconProps {
  asset: any
  style?: any
}
export function Icon({ asset, style }: IconProps) {
  const resolveAsset = (asset: any) => {
    if (typeof asset === 'object' && asset.src) return asset.src
    console.log('aset ', asset)
    return asset
  }

  return (
    <Image
      source={resolveAsset(asset)}
      style={[{ width: 24, height: 24 }, style]}
      resizeMode="contain"
    />
  )
}
