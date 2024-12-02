const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return <div className="mt-3 d-flex justify-content-center">
        <label htmlFor="gender" className="text-secondary">Gender: </label>
        <div className="form-check mx-4">
            <input
                className="form-check-input"
                type="checkbox"
                value={"male"}
                checked={selectedGender === "male"}
                onChange={() => onCheckboxChange("male")}
            />
            <label className={`form-check-label text-secondary cursor-pointer ${selectedGender === "male"? "selected": ""}`} htmlFor="flexCheckDefault">
                Male
            </label>
        </div>
        <div className="form-check mx-3">
            <input
                className="form-check-input"
                type="checkbox"
                value={"female"}
                checked={selectedGender === "female"}
                onChange={() => onCheckboxChange("female")}
            />
            <label className={`form-check-label text-secondary cursor-pointer ${selectedGender === "female" ? "selected" : ""}`} htmlFor="male">
                Female
            </label>
        </div>
    </div>
}

export default GenderCheckBox;