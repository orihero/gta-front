import CIcon from '@coreui/icons-react';
import {
	CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CRow,
	// CCardHeader,
	// CCol,
	// CProgress,
	// CRow,
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import requests, { url } from 'src/api/requests';

export default function Clients() {
	let history = useHistory();
	let onAddPress = () => {
		history.push('/addEdit-cars');
	};

	const [cars, setCars] = useState([]);

	let effect = async () => {
		let res = await requests.cars.get();
		setCars(res.data.data);
	};

	useEffect(() => {
		effect();
	}, []);

	return (
		<div>
			<CCard>
				<CCardHeader>
					<CRow>
						<CCol sm='5'>
							<h4 id='traffic' className='card-title mb-0'>
								Traffic
							</h4>
							<div className='small text-muted'>
								November 2017
							</div>
						</CCol>
						<CCol sm='7' className='d-none d-md-block'>
							<CButton
								color='primary'
								onClick={onAddPress}
								className='float-right'>
								<CIcon name='cil-plus' />
							</CButton>
							<CButton
								color='primary'
								className='float-right mr-3'>
								<CIcon name='cil-filter' />
							</CButton>
						</CCol>
					</CRow>
				</CCardHeader>
				<CCardBody>
					<table className='table table-hover table-outline mb-0 d-none d-sm-table'>
						<thead className='thead-light'>
							<tr>
								<th className='text-center'>
									<CIcon name='cilCarAlt' />
								</th>
								<th>Car</th>
								<th>Price</th>
								<th>Mileage</th>
								<th>CarNumber</th>
								<th>Color</th>
								<th className='text-center'>Activity</th>
							</tr>
						</thead>
						<tbody>
							{cars &&
								cars.map((e) => {
									return (
										<tr>
											<td className='text-center'>
												<div className='c-avatar'>
													<img
														src={`${url}${
															e.car_photos
																? e.car_photos.split(
																		','
																  )[0]
																: ''
														}`}
														className='c-avatar-img'
														alt='admin@bootstrapmaster.com'
													/>
													<span className='c-avatar-status bg-success'></span>
												</div>
											</td>
											<td>
												<div>BMW M5</div>
											</td>
											<td className='text-center'>
												<div className='float-left'>
													<span>{e.price}</span>
												</div>
											</td>

											<td className='text-center'>
												<div className='float-left'>
													<span>{e.mileage}</span>
												</div>
											</td>

											<td className='text-center'>
												<div className='float-left'>
													{e.car_number}
												</div>
											</td>

											<td className='text-center'>
												<div className='float-left'>
													{e.color}
												</div>
											</td>

											<CButton
												color='primary'
												onClick={onAddPress}
												className='float-right mt-2 mr-4'>
												<CIcon name='cilLowVision' />
											</CButton>
											<CButton
												color='primary'
												onClick={onAddPress}
												className='float-right mt-2 mr-4'>
												<CIcon name='cil-pencil' />
											</CButton>
										</tr>
									);
								})}
						</tbody>
					</table>
				</CCardBody>
			</CCard>
		</div>
	);
}
