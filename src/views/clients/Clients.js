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
								<th className='text-center'>Country</th>
								<th>Usage</th>
								<th className='text-center'>Payment Method</th>
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
									<CIcon
										height={25}
										name='cif-us'
										title='us'
										id='us'
									/>
								</td>
								<td>
									<div className='clearfix'>
										<div className='float-left'>
											<strong>50%</strong>
										</div>
										<div className='float-right'>
											<small className='text-muted'>
												Jun 11, 2015 - Jul 10, 2015
											</small>
										</div>
									</div>
									<CProgress
										className='progress-xs'
										color='success'
										value='50'
									/>
								</td>
								<td className='text-center'>
									<CIcon
										height={25}
										name='cib-cc-mastercard'
									/>
								</td>
								<td>
									<div className='small text-muted'>
										Last login
									</div>
									<strong>10 sec ago</strong>
								</td>
							</tr>
							<tr>
								<td className='text-center'>
									<div className='c-avatar'>
										<img
											src={'avatars/2.jpg'}
											className='c-avatar-img'
											alt='admin@bootstrapmaster.com'
										/>
										<span className='c-avatar-status bg-danger'></span>
									</div>
								</td>
								<td>
									<div>Avram Tarasios</div>
									<div className='small text-muted'>
										<span>Recurring</span> | Registered: Jan
										1, 2015
									</div>
								</td>
								<td className='text-center'>
									<CIcon
										height={25}
										name='cif-br'
										title='br'
										id='br'
									/>
								</td>
								<td>
									<div className='clearfix'>
										<div className='float-left'>
											<strong>10%</strong>
										</div>
										<div className='float-right'>
											<small className='text-muted'>
												Jun 11, 2015 - Jul 10, 2015
											</small>
										</div>
									</div>
									<CProgress
										className='progress-xs'
										color='info'
										value='10'
									/>
								</td>
								<td className='text-center'>
									<CIcon height={25} name='cib-cc-visa' />
								</td>
								<td>
									<div className='small text-muted'>
										Last login
									</div>
									<strong>5 minutes ago</strong>
								</td>
							</tr>
							<tr>
								<td className='text-center'>
									<div className='c-avatar'>
										<img
											src={'avatars/3.jpg'}
											className='c-avatar-img'
											alt='admin@bootstrapmaster.com'
										/>
										<span className='c-avatar-status bg-warning'></span>
									</div>
								</td>
								<td>
									<div>Quintin Ed</div>
									<div className='small text-muted'>
										<span>New</span> | Registered: Jan 1,
										2015
									</div>
								</td>
								<td className='text-center'>
									<CIcon
										height={25}
										name='cif-in'
										title='in'
										id='in'
									/>
								</td>
								<td>
									<div className='clearfix'>
										<div className='float-left'>
											<strong>74%</strong>
										</div>
										<div className='float-right'>
											<small className='text-muted'>
												Jun 11, 2015 - Jul 10, 2015
											</small>
										</div>
									</div>
									<CProgress
										className='progress-xs'
										color='warning'
										value='74'
									/>
								</td>
								<td className='text-center'>
									<CIcon height={25} name='cib-stripe' />
								</td>
								<td>
									<div className='small text-muted'>
										Last login
									</div>
									<strong>1 hour ago</strong>
								</td>
							</tr>
							<tr>
								<td className='text-center'>
									<div className='c-avatar'>
										<img
											src={'avatars/4.jpg'}
											className='c-avatar-img'
											alt='admin@bootstrapmaster.com'
										/>
										<span className='c-avatar-status bg-secondary'></span>
									</div>
								</td>
								<td>
									<div>Enéas Kwadwo</div>
									<div className='small text-muted'>
										<span>New</span> | Registered: Jan 1,
										2015
									</div>
								</td>
								<td className='text-center'>
									<CIcon
										height={25}
										name='cif-fr'
										title='fr'
										id='fr'
									/>
								</td>
								<td>
									<div className='clearfix'>
										<div className='float-left'>
											<strong>98%</strong>
										</div>
										<div className='float-right'>
											<small className='text-muted'>
												Jun 11, 2015 - Jul 10, 2015
											</small>
										</div>
									</div>
									<CProgress
										className='progress-xs'
										color='danger'
										value='98'
									/>
								</td>
								<td className='text-center'>
									<CIcon height={25} name='cib-paypal' />
								</td>
								<td>
									<div className='small text-muted'>
										Last login
									</div>
									<strong>Last month</strong>
								</td>
							</tr>
							<tr>
								<td className='text-center'>
									<div className='c-avatar'>
										<img
											src={'avatars/5.jpg'}
											className='c-avatar-img'
											alt='admin@bootstrapmaster.com'
										/>
										<span className='c-avatar-status bg-success'></span>
									</div>
								</td>
								<td>
									<div>Agapetus Tadeáš</div>
									<div className='small text-muted'>
										<span>New</span> | Registered: Jan 1,
										2015
									</div>
								</td>
								<td className='text-center'>
									<CIcon
										height={25}
										name='cif-es'
										title='es'
										id='es'
									/>
								</td>
								<td>
									<div className='clearfix'>
										<div className='float-left'>
											<strong>22%</strong>
										</div>
										<div className='float-right'>
											<small className='text-muted'>
												Jun 11, 2015 - Jul 10, 2015
											</small>
										</div>
									</div>
									<CProgress
										className='progress-xs'
										color='info'
										value='22'
									/>
								</td>
								<td className='text-center'>
									<CIcon height={25} name='cib-google-pay' />
								</td>
								<td>
									<div className='small text-muted'>
										Last login
									</div>
									<strong>Last week</strong>
								</td>
							</tr>
							<tr>
								<td className='text-center'>
									<div className='c-avatar'>
										<img
											src={'avatars/6.jpg'}
											className='c-avatar-img'
											alt='admin@bootstrapmaster.com'
										/>
										<span className='c-avatar-status bg-danger'></span>
									</div>
								</td>
								<td>
									<div>Friderik Dávid</div>
									<div className='small text-muted'>
										<span>New</span> | Registered: Jan 1,
										2015
									</div>
								</td>
								<td className='text-center'>
									<CIcon
										height={25}
										name='cif-pl'
										title='pl'
										id='pl'
									/>
								</td>
								<td>
									<div className='clearfix'>
										<div className='float-left'>
											<strong>43%</strong>
										</div>
										<div className='float-right'>
											<small className='text-muted'>
												Jun 11, 2015 - Jul 10, 2015
											</small>
										</div>
									</div>
									<CProgress
										className='progress-xs'
										color='success'
										value='43'
									/>
								</td>
								<td className='text-center'>
									<CIcon height={25} name='cib-cc-amex' />
								</td>
								<td>
									<div className='small text-muted'>
										Last login
									</div>
									<strong>Yesterday</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</CCardBody>
			</CCard>
		</div>
	);
}
