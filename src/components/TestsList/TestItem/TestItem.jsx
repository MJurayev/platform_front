import st from "./TestItem.module.scss"

import arrowToLeft from '../../../assets/img/arrowToLeft.png'
export default function TestItem({test}) {
    return (
        <div className={st.container}>
            <div className={st.testInfo}>
                {test.quizName}
            </div>
            <div className={st.arrow}><img src={arrowToLeft} alt=""/></div>
        </div>
    )
}
