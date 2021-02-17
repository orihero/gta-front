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
						<CCardHeader>Данные пользователя</CCardHeader>
						<CCardBody>
							<CForm action='' method='post'>
								<CFormGroup>
									<CInputGroup>
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name='cil-user' />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput
											onChange={onInputChange}
											id='username1'
											name='firstname'
											placeholder='Имя пользователя'
											autoComplete='name'
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name='cil-user' />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput
											id='username1'
											name='lastname'
											placeholder='Фамилия пользователя'
											autoComplete='lastname'
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name='cil-phone' />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput
											type='tel'
											id='tel1'
											name='phone_numbers'
											placeholder='Номер телефона'
											autoComplete='tel'
											className='form-control-success'
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name='cil-calendar' />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CInput
											type='date'
											id='date-input'
											name='date_of_birth'
											placeholder='Date of birth'
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name='cil-file' />
											</CInputGroupText>
										</CInputGroupPrepend>
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
												Аватар
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
								<CFormGroup>
									<CInputGroup>
										<CInputGroupPrepend>
											<CInputGroupText>
												<CIcon name='cil-file' />
											</CInputGroupText>
										</CInputGroupPrepend>
										<CCol>
											<CInputFile
												id='file-multiple-input'
												name='file-multiple-input'
												multiple
												custom
												onChange={onFileChange}
											/>
											<CLabel
												htmlFor='file-multiple-input'
												variant='custom-file'>
												Паспорт пользователя
											</CLabel>
										</CCol>
									</CInputGroup>
								</CFormGroup>
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
