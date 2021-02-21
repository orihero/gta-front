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
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import requests, { url } from 'src/api/requests';

export default function AddEdit() {
	let history = useHistory();
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
	useEffect(() => {
		console.log({ state });
	});
	let onFileChange = async (e) => {
		let form = new FormData();
		e.target.files.forEach((e) => {
			form.append('files', e);
		});
		try {
			let urls = await requests.upload.multiple(form);
			let url = urls.data.data.reduce((prev, current, i) => {
				console.log({ current, prev });
				let res = prev + current;
				if (i !== urls.data.data.length - 1) {
					res += ',';
				}
				return res;
			}, '');
			console.log({ url, urls });
			setState({
				...state,
				[e.target.name]: url,
			});
		} catch (error) {}
	};
	let onSubmit = async (e) => {
		console.log('DSA');
		try {
			let res = await requests.clients.create(state);
		} catch (error) {
			console.error(error);
			console.error({ res: error?.response });
		}
		e.preventDefault();
		history.push('/clients');
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
												name='avatar'
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
									<div className='mb-2'>
										<img
											src={`${url}${state.avatar}`}
											style={{ width: 100, height: 100 }}
											alt='admin@bootstrapmaster.com'
										/>
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
												name='passport_photos'
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
								{state.passport_photos &&
									state.passport_photos
										.split(',')
										.map((e, i) => {
											return (
												<div key={i} className='mb-2'>
													<img
														src={`${url}${e}`}
														style={{
															width: 100,
															height: 100,
														}}
														alt='admin@bootstrapmaster.com'
													/>
												</div>
											);
										})}
								<CFormGroup className='form-actions float-right'>
									<CButton
										onClick={onSubmit}
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
