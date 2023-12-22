import React, { useState } from "react";
import SkillsDetailsList from "./SkillsDetailsList"; // Import the SkillsDetailsList component

const SkillsModal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    return (
        <div>
            <button
                onClick={toggleModal}
                className="underline underline-offset-4 text-secondary-light px-8 py-4 absolute bottom-0 left-0"
            >
                View my skills as a list
            </button>

            {showModal && (
                <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-[90vw] relative h-[80vh] mt-20 overflow-y-scroll bg-secondary p-5 rounded">
                        <SkillsDetailsList />
                        <button
                            onClick={toggleModal}
                            className="absolute top-0 right-0 text-secondary-light hover:text-secondary-light50op font-bold py-2 px-4 rounded"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillsModal;
