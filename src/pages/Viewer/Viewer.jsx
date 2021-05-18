
import { useLocation} from 'react-router'
import st from './Viewer.module.css'
export default function Viewer() {
    const query =new URLSearchParams(useLocation().search)
    return (
        <div className={st.container}>
            <iframe
                title="titlemy"
                src={`https://docs.google.com/viewer?url=${query.get("file")}&embedded=true`}
                width="100%"
                style={{height:'80vh'}}
                frameBorder="0"
            />
        </div>
    )
}
