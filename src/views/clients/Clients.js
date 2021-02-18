import CIcon from '@coreui/icons-react';
import {
	CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CProgress,
	CRow,
} from '@coreui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Clients() {
	let history = useHistory();
	let onAddPress = () => {
		console.log('ADDING');
		history.push('/addEdit');
	};
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
									<CIcon name='cil-people' />
								</th>
								<th>User</th>
								<th className='text-center'>Number</th>
								<th>Date</th>
								<th>Activity</th>
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
									<div>Yiorgos Avraamu</div>
									<div className='small text-muted'>
										<span>New</span> | Registered: Jan 1,
										2015
									</div>
								</td>
								<td className='text-center'>
									<div className="number">
										<a className="number-link" href="#">+99890 313 36 36</a>
									</div>
								</td>

								<td className='text-center'>
									<div className="float-left">
										<span>18-02.2021</span>
									</div>
								</td>

								<td className='text-center'>

									<div className="float-left">
									
									<CButton
										color='primary'
										onClick={onAddPress}
										className='float-right'>
										<CIcon name='cil-pencil' />
									</CButton>
									<CButton
										color='primary'
										onClick={onAddPress}
										className='float-right mr-4'>
										<CIcon name='cil-magnifying-glass' />
									</CButton>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</CCardBody>
			</CCard>
		</div>
	);
}
