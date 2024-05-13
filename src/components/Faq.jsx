

const Faq = () => {
    return (
        <div>
            <div className="p-3 mb-3">
                <h1 className="text-center text-3xl font-semibold ">Faq</h1>
                <p className="text-center mb-3">Will have some frequently asked questions</p>
                <div className="grid w-full">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                How do I access my online study assignments?
                            </div>
                            <div className="collapse-content">
                                <p>Just Login and access online study assignments</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Will there be feedback provided on my online assignments?
                            </div>
                            <div className="collapse-content">
                                <p>Yes</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            Is there any deadline for submitting my online assignments?
                            </div>
                            <div className="collapse-content">
                                <p>Yes</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            Can I submit assignments late, and if so, will there be penalties?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, Some penalties but if you give valide reason then it will consider.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;