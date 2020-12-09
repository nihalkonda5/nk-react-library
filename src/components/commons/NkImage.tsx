import React from 'react'

export default function NkImage({
  src,
  alt,
  style,
  errorSrc,
  height,
  width,
  circle,
  border,
  margin
}: {
  src: string
  alt?: string
  style?: React.CSSProperties
  height?: number
  width?: number
  circle?: boolean
  border?: boolean
  margin?: number
  errorSrc?: string
}) {
  const [error, setError] = React.useState(false)

  const [_style, setStyle] = React.useState<React.CSSProperties>({ ...style } || {})

  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

  React.useEffect(() => {
    const __style = { ..._style };

    __style.height = _style.height || height || 200
    __style.width = _style.width || width || 200
    __style.objectFit = _style.objectFit || 'contain'
    __style.backgroundColor = _style.backgroundColor || 'white'
    __style.margin = _style.margin || margin || 5

    if (circle) {
      __style.borderRadius = '50%'
      __style.objectFit = 'cover'
    }

    if (border) {
      __style.border = dimensions.width / 40 + 'px white solid'
      __style.boxShadow = '0 0 5px #444'
    }

    setStyle(__style)
  }, [dimensions])

  if (error) {
    src =
      errorSrc ||
      'https://i.pinimg.com/originals/eb/4f/f5/eb4ff53de5c19dddcc25704418ebd9aa.png'
  }

  return (
    <img
      style={_style}
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
