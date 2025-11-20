import react, { useState } from 'react';
import { db } from './Firebase'
import { collection, addDoc } from 'firebase/firestore'
export default function Form() {
    const initialFormData={
        country: "",
        classPreference: "",
        gender: "",
        city: "",
        course: "",
        fullName: "",
        fatherName: "",
        email: "",
        phone: "",
        cnic: "",
        fatherCnic: "",
        dob: "",
        computerProficiency: "",
        laptop: "",
        lastQualification: "",
        address: "",
    }
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        for(let key in formData)
        if (!formData[key]) {
            alert("please fill all the required fields");
        }
        try {
            await addDoc(collection(db, "Student Information"), formData);
            alert("Data saved successfully!");
             setFormData(initialFormData);
        }
        catch (err) {
            console.error(err);
            alert("Error submitting data!");
        };
    }
    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>
                <div className='row g-3 p-5'>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="country">select country</label>
                        <select className="form-select mb-3 p-3" name="country" value={formData.country} id="country" onChange={handleChange} >
                            <option value="" className='muted'>select country</option>
                            <option value="pakistan">Pakistan</option>
                            <option value="turkey">Turkey</option>
                            <option value="yemen">Yemen</option>
                        </select>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="class-preference">select class preference</label>
                        <select name="class-preference" value={formData.classPreference} className="form-select mb-3 p-3" id="class-preference" onChange={handleChange} >
                            <option value=""  className='muted'>select class preference</option>
                            <option value="onsite">Onsite</option>
                            <option value="online">Online</option>
                        </select>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label'htmlFor="gender">select gender</label>
                        <select name="gender" className="form-select mb-3 p-3" id="gender" value={formData.gender} onChange={handleChange}>
                            <option value=""  className='muted'>select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className='col-12 col-lg-6'>

                        <label className='m-3 form-label' htmlFor="city">select city</label>
                        <select name="city" id="city" className="form-select mb-3 p-3 " value={formData.city} onChange={handleChange}>
                            <option value=""  className='muted'>select city</option>
                            <option value="karachi">Karachi</option>
                            <option value="faisalabad">Faisalabad</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="multan">Multan</option>
                            <option value="lakki marwat">Lakki Marwat</option>
                        </select>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="course">select course or event</label>
                        <select name="course" id="course" className="form-select mb-3 p-3" value={formData.course} onChange={handleChange}>
                            <option value=""  className='muted'>select course or event</option>
                            <option value="mobile-web-appllicatio-development">Mobile web and App</option>
                            <option value="graphicDesigning">Graphic Designing with AI</option>
                            <option value="digital-marketing">Digital Marketing with AI</option>
                            <option value="AI-DS">Artificial Intelligence and Data Science</option>
                        </select>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="name">Full name</label>
                        <input className='form-control p-3' type="text" placeholder="Full name" id="name" required value={formData.fullName} onChange={handleChange} name='fullName' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="father-name">Father name</label>
                        <input className='form-control p-3' type="text" placeholder="Father name" id="country" required value={formData.fatherName} onChange={handleChange} name='fatherName' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="email">Email</label>
                        <input className='form-control p-3' type="email" placeholder="Email" id="email" required value={formData.email} onChange={handleChange} name='email' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="phone">Phone</label>
                        <input className='form-control p-3' type="number" placeholder="Phone" id="phone" required value={formData.phone} onChange={handleChange} name='phone' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="CNIC">CNIC</label>
                        <input className='form-control p-3' type="text" placeholder="CNIC" id="CNIC" required value={formData.cnic} onChange={handleChange} name='cnic' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="father-cnic">Father's CNIC (optional)</label>
                        <input className='form-control p-3' type="text" placeholder="Father's CNIC (optional)" id="father-cnic" value={formData.fatherCnic} onChange={handleChange} name='fatherCnic' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="dob">Date of Birth</label>
                        <input className='form-control p-3' type="date" id="dob" required value={formData.dob} onChange={handleChange} name='dob' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="computer-proficiency">select your computer proficiency</label>
                        <select
                         name="computerProficiency"
                          required
                           id="computer-proficiency"
                            className="form-select mb-3 p-3"
                             value={formData.computerProficiency} 
                             onChange={handleChange}>
                            <option value="" className='muted'>select your computer proficiency</option>
                            <option value="none">None</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <label className='m-3 form-label' htmlFor="laptop">Do you have a laptop?</label>
                        <select name="laptop" required id="laptop" className="form-select mb-3 p-3" value={formData.laptop} onChange={handleChange}>
                            <option value=""  className='muted'>Do you have a laptop?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className='col-12'>
                        <label className='m-3 form-label' htmlFor="qualification">Last Qualification</label>
                        <select
                            required
                            id="qualification"
                            className="form-select mb-3 p-3"
                            value={formData.lastQualification}
                            onChange={handleChange}
                            name='lastQualification'>
                            <option value="" className='muted'>Last Qualification</option>
                            <option value="matric">Matric</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="graduate">Graduate</option>
                        </select>
                    </div>

                    <div className='col-12 '>
                        <label className='m-3 form-label' htmlFor="address">Address</label >
                        <textarea name="address" id="address" required className='form-control' placeholder='address' value={formData.address} onChange={handleChange} ></textarea>
                    </div>

                    <div className='container '>
                        <ol className='text-sm'>
                            <li><small> I hereby, solemnly declare that the data and facts mentioned herein are true and correct to the best of my knowledge. Further, I will abide by all the established and future regulations and policies of SWIT</small></li>
                            <li><small>I hereby accept the responsibilities of good conduct and guarantee that I will not be involved in any other activity, political or ethical, but learning during my stay in the program</small></li>
                            <li><small>Defiance will render my admission canceled at any point in time.</small></li>
                            <li><small>Upon completion, of the course, I will complete the required project by SWIT.</small></li>
                            <li><small>It's mandatory for female students to wear abaya/hijab in the class </small></li>
                        </ol>
                    </div>
                    <div className='d-grid col-11 mx-auto mb-5'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>
            console.log(formData);
        </div>
    )
};