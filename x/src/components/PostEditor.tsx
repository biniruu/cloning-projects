import { useRef } from 'react'

interface Props {
  getContent: (content: string) => void
}

function PostEditor({ getContent }: Props) {
  const contentEditorRef = useRef<HTMLTextAreaElement>(null)

  const postContent = () => {
    const content = contentEditorRef?.current
    if (content) {
      getContent(content.value)
    }
  }

  return (
    <div>
      <div className="text-black">
        <textarea ref={contentEditorRef}></textarea>
      </div>
      <div>
        <button type="button" onClick={postContent}>
          게시
        </button>
      </div>
    </div>
  )
}

export default PostEditor
