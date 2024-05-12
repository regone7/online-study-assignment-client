

const PendingCard = ({ pendss }) => {
    const { link_submit, note_text, status, email, examinee_name, atitle, amarks } = pendss
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{atitle}</h2>
                    <p>Marks: {amarks}</p>
                    <p>Examinee Name: {examinee_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm border-1 border-pink-500 ">Give Mark”</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingCard;