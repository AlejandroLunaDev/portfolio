import styles from './SliderParagraph.module.scss'

interface Props {
  title?: string
  text?: string
}

export default function SliderParagraph({ title, text }: Props) {
  return (
    <div className={styles['slider-paragraph']}>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </div>
  )
}
