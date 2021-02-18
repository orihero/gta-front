import CIcon from '@coreui/icons-react';
import {
	CButton,
	CCard,
	CCardBody,
	// CCardHeader,
	// CCol,
	// CProgress,
	// CRow,
} from '@coreui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Clients() {
	let history = useHistory();
	let onAddPress = () => {
		console.log('ADDING');
		history.push('/addEdit-cars');
	};
	return (
		<div>
			<CCard>
			
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
								<th className="text-center">Activity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='text-center'>
									<div className='c-avatar'>
										<img
											src={'avatars/1.jpg'}
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
									<div className="float-left">
                                        <span>80 000 $</span>
									</div>
								</td>

								<td className='text-center'>
									<div className="float-left">
										<span>120 km</span>
									</div>
								</td>

								<td className='text-center'>
									<div className="float-left">
                                        01 Y 575 DA 
									</div>
								</td>

                                <td className='text-center'>
									<div className="float-left">
                                        Black
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
						</tbody>
					</table>
				</CCardBody>
			</CCard>
		</div>
	);
}
