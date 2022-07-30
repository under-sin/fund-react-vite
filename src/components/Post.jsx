import styles from './Post.module.css'
import {Comment} from "./Comment";

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/under-sin.png"
            alt="Foto do usuário"
          />
          <div className={styles.authorInfo}>
            <strong>Anderson</strong>
            <span>Frontend develop</span>
          </div>
        </div>
        <time title="30 de julho as 09:06h" dateTime="30-07-2022 09:06:00">Publícado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">👉 jane.design/doctorcare</a></p>
        <p className={styles.hashs}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe o seu comentário"/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>

    </article>
  )
}