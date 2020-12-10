import { svgProps } from './types'

export const ImgFeatureOne = ({ className = '', width = 640, height = 732 }: svgProps) => (
    <img className={className} width={width} height={height} src="feature_1.png" />
)

export const ImgFeatureTwo = ({ className = '', width = 610, height = 672 }: svgProps) => (
    <img className={className} width={width} height={height} src="feature_2.png" />
)

export const ImgFeatureThree = ({ className = '', width = 610, height = 647 }: svgProps) => (
    <img className={className} width={width} height={height} src="feature_3.png" />
)

export const ImgFeatureFour = ({ className = '', width = 407, height = 356 }: svgProps) => (
    <img className={className} width={width} height={height} src="coming_soon.png" />
)
