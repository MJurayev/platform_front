import st from './OurComforts.module.scss'
import iconComforts from '../../assets/img/01icon_comforts.png'

export default function OurComforts() {
    return (
        <div className={st.container}>
            <div className={st.head }>
                <div className={st.title}>Bizning qulayliklar</div>
                <div className={st.description}>Lorem ipsum is common placeholder text used to demonstrate the graphic elements o</div>
            </div>

            <div className={st.comfortLists}>
                <div className={st.comfortsItem }>
                    <img src={iconComforts} alt=""/>
                    <div className={st.heading}>Aniqlik</div>
                    <div className={st.descriptionItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                </div>
                <div className={st.comfortsItem }>
                    <img src={iconComforts} alt=""/>
                    <div className={st.heading}>Aniqlik</div>
                    <div className={st.descriptionItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                </div>
                <div className={st.comfortsItem }>
                    <img src={iconComforts} alt=""/>
                    <div className={st.heading}>Aniqlik</div>
                    <div className={st.descriptionItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                </div>
                <div className={st.comfortsItem }>
                    <img src={iconComforts} alt=""/>
                    <div className={st.heading}>Aniqlik</div>
                    <div className={st.descriptionItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                </div>
                <div className={st.comfortsItem }>
                    <img src={iconComforts} alt=""/>
                    <div className={st.heading}>Aniqlik</div>
                    <div className={st.descriptionItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                </div>
                <div className={st.comfortsItem }>
                    <img src={iconComforts} alt=""/>
                    <div className={st.heading}>Aniqlik</div>
                    <div className={st.descriptionItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                </div>
            </div>

            
        </div>
    )
}
