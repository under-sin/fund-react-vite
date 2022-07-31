import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/under-sin.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anderson Vieira</strong>
              <time title="30 de julho as 09:06h" dateTime="30-07-2022 09:06:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}