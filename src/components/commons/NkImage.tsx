import React from 'react'

export default function NkImage({
  src,
  alt,
  _style,
  errorSrc,
  height,
  width,
  circle,
  border,
  margin
}: {
  src: string
  alt?: string
  _style?: React.CSSProperties
  height?: number
  width?: number
  circle?: boolean
  border?: boolean
  margin?: number
  errorSrc?: string
}) {
  const [error, setError] = React.useState(false)

  const [style, setStyle] = React.useState<React.CSSProperties>(_style || {})

  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

  React.useEffect(() => {
    const _style = style || {}

    _style.height = _style.height || height || 200
    _style.width = _style.width || width || 200
    _style.objectFit = _style.objectFit || 'contain'
    _style.backgroundColor = _style.backgroundColor || 'white'
    _style.margin = _style.margin || margin || 5

    if (circle) {
      _style.borderRadius = '50%'
      _style.objectFit = 'cover'
    }

    if (border) {
      _style.border = dimensions.width / 40 + 'px white solid'
      _style.boxShadow = '0 0 5px #444'
    }

    setStyle(_style)
  }, [dimensions])

  if (error) {
    src =
      errorSrc ||
      'https://i.pinimg.com/originals/eb/4f/f5/eb4ff53de5c19dddcc25704418ebd9aa.png'
  }

  return (
    <img
      style={style}
      src={src}
      alt={alt || 'Basic Image'}
      onError={() => {
        setError(true)
      }}
      onLoad={(event) => {
        setDimensions({
          width: event.currentTarget.clientWidth,
          height: event.currentTarget.clientHeight
        })
      }}
    />
  )
}
