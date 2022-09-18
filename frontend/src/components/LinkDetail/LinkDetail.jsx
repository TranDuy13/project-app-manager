import './LinkDetail.scss'
import BreadCrumbs from '../../components/breadcrumbs/breadCrumbs';
function LinkDetail(props){
    return(
        <>
            <div className="bg-profileContainer">
                <div className="profileTitle">{props.label}</div>
                <BreadCrumbs titTle={props.tittle}/>
            </div>
        </>
    )
}
export default LinkDetail;
