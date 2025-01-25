import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    lastDegree: '',
    resume: null,
    about: '',
    gender: '',
    favoriteSubjects: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        favoriteSubjects: checked
          ? [...prev.favoriteSubjects, value]
          : prev.favoriteSubjects.filter((subject) => subject !== value),
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      fatherName: '',
      lastDegree: '',
      resume: null,
      about: '',
      gender: '',
      favoriteSubjects: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h2 className="text-2xl font-bold mb-6">Application Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Father Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Degree</label>
          <select
            name="lastDegree"
            value={formData.lastDegree}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Degree</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Favorite Subjects</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="favoriteSubjects"
                value="Math"
                checked={formData.favoriteSubjects.includes('Math')}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Math</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                name="favoriteSubjects"
                value="Science"
                checked={formData.favoriteSubjects.includes('Science')}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Science</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                name="favoriteSubjects"
                value="History"
                checked={formData.favoriteSubjects.includes('History')}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">History</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="reset"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;