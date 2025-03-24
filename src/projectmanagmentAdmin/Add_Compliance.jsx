import React, { useState, useCallback } from 'react';
import { BiCalendar, BiCloudUpload } from 'react-icons/bi';
import { useDropzone } from 'react-dropzone';
import Sidebar from './Sidebar';

import { BiSearch } from 'react-icons/bi';

import { BsBell} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';
function Add_Compliance() {
  const [formData, setFormData] = useState({
    policyName: '',
    department: 'Human Resources',
    description: '',
    effectiveDate: '',
    reviewDate: '',
    policyDocument: null
  });

  const [errors, setErrors] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    setFormData(prev => ({
      ...prev,
      policyDocument: file
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.policyName.trim()) newErrors.policyName = 'Policy name is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.effectiveDate) newErrors.effectiveDate = 'Effective date is required';
    if (!formData.reviewDate) newErrors.reviewDate = 'Review date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Policy created:', formData);
      // Add API call here to save the policy
    }
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
    <Header/>
    </div>
  );
}

export default Add_Compliance;