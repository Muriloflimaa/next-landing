import styles from './styles.module.css'
export function Embed() {
    return (
        <div
            className="flex justify-center mx-auto flex-col items-center pt-10 md:pb-10"
            id="Embed"
        >
            <h1 className="text-center text-3xl text-indigo-loja uppercase font-bold pb-5 md:text-left">
                Assista ao vídeo e entenda melhor.
            </h1>
            <div className={styles.embed}>
                <iframe
                    src="https://www.youtube.com/embed/FrYS9Hj_yEk"
                    loading="lazy"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
