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
	CLabel,
	CRow,
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import requests, { url } from 'src/api/requests';

export default function AddEdit() {
	const [state, setState] = useState({});
	let history = useHistory();
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
			let res = await requests.cars.create(state);
		} catch (error) {
			console.error(error);
			console.error({ res: error?.response });
		}
		e.preventDefault();
		history.push('/cars');
	};

	useEffect(() => {
		console.log({ state });
	}, [state]);

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
											name='price'
											placeholder='Цена'
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInput
											name='color'
											placeholder='Цвет'
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInput
											name='mileage'
											placeholder='Пробег '
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
										<CInput
											name='car_number'
											placeholder='Номер машины '
											onChange={onInputChange}
										/>
									</CInputGroup>
								</CFormGroup>
								<CFormGroup>
									<CInputGroup>
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
										<CCol>
											<CInputFile
												id='file-input'
												name='car_photos'
												custom
												onChange={onFileChange}
												multiple
											/>
											<CLabel
												htmlFor='file-input'
												variant='custom-file'>
												Фотографии автомобила
											</CLabel>
										</CCol>
									</CInputGroup>
								</CFormGroup>

								{state.car_photos &&
									state.car_photos.split(',').map((e, i) => {
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
								<CFormGroup>
									<CInputGroup>
										<CCol>
											<CInputFile
												id='file-input'
												name='keys_photo'
												custom
												onChange={onFileChange}
											/>
											<CLabel
												htmlFor='file-input'
												variant='custom-file'>
												Фотографии ключей от машины
											</CLabel>
										</CCol>
									</CInputGroup>
								</CFormGroup>

								{state.keys_photo && (
									<div className='mb-2'>
										<img
											src={`${url}${state.keys_photo}`}
											style={{
												width: 100,
												height: 100,
											}}
											alt='admin@bootstrapmaster.com'
										/>
									</div>
								)}

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
