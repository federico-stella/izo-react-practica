import Title from "./Title";

export default function Header({pageTitle}){
    return (
        <div className="pageHeader">
            <Title title={pageTitle}></Title>
        </div>
    )
}