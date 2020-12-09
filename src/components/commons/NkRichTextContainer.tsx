import React from 'react'

export default function NkRichTextContainer({ html }: { html: string }) {
  return (
    <div
      className='quill ql-editor ql-container'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
