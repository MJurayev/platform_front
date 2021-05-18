import headerImage from '../../assets/img/headerImage.jpg'
import ArrowRight from '../../assets/img/arrow_right.png'

import st from './Header.module.scss'
export default function Header() {
    return (
        <div className={st.container}>
            <div className={st.welcome}>
                <div className={st.title}>Bizning platformamizga xush kelibsiz</div>
                <div className={st.description}>"Jismoniy tarbiya va sport marketingi" o'quv qo'llanmasini elektron platformasi</div>
                <button>Ko'proq <img src={ArrowRight} alt=""/></button>
            </div>
            <img src={headerImage} alt=""/>
        </div>
    )
}
