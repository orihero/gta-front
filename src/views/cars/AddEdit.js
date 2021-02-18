import CIcon from '@coreui/icons-react';
import {
	CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CForm,
	CFormGroup,
	CInput,
	CInputFile,
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
	CLabel,
	CRow,
} from '@coreui/react';
import React, { useState } from 'react';
import requests, { url } from 'src/api/requests';

export default function AddEdit() {
	const [state, setState] = useState({
		firstname: '',
		lastname: '',
		date_of_birth: '',
		avatar: '',
		passport_photos: '',
		phone_numbers: '',
	});

    
	const [loading, setLoading] = useState(false);
	let onInputChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	let onFileChange = async (e) => {
		let form = new FormData();
		e.target.files.forEach((e) => {
			form.append('files', e);
		});
		try {
			let urls = await requests.upload.multiple(form);
			setState({
				...state,
				[e.target.name]: urls.data.data.reduce(
					(prev, current, i) =>
						prev + current + i === urls.data.data.length - 1
							? ''
							: ',',
					''
				),
			});
		} catch (error) {}
	};
	let onSubmit = async (e) => {
		let res = await requests.clients.create(e);
	};

    
	return (
		<div>
			<CRow>
				<CCol xs='12' sm='6'>
					<CCard>
						<CCardHeader>Данные машины</CCardHeader>
						<CCardBody>
							<CForm action='' method='post'>
								<CFormGroup>
									<CInputGroup>
								
										<CInput
											onChange={onInputChange}
											id='username1'
											name='firstname'
											placeholder='Car Model'
											autoComplete='name'
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
								
										<CInput
											id='username1'
											name='lastname'
											placeholder='Car Number'
											autoComplete='lastname'
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
								
										<CInput
											type='tel'
											name='phone_numbers'
											placeholder='Price '
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CCol>
											<CInputFile
												id='file-input'
												name='file-input'
												custom
												onChange={onFileChange}
											/>
											<CLabel
												htmlFor='file-input'
												variant='custom-file'>
												TechnicalPassportPhotos 
											</CLabel>
										</CCol>
									</CInputGroup>
								</CFormGroup>
                           
								{state.avatar && (
									<div className='c-avatar'>
										<img
											src={`${url}${state.avatar}`}
											className='c-avatar-img'
											alt='admin@bootstrapmaster.com'
										/>
										<span className='c-avatar-status bg-success'></span>
									</div>
								)}
								<CFormGroup className='form-actions float-right'>
									<CButton
										onClick={onSubmit}
										type='submit'
										size='sm'
										color='success'>
										Сохранить
									</CButton>
								</CFormGroup>
							</CForm>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</div>
	);
}
