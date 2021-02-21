import CIcon from '@coreui/icons-react';
import {
	CCard,
	CCardBody,
	CCardFooter,
	CCardHeader,
	CCol,
	CRow,
	CButton,
} from '@coreui/react';
import React from 'react';
import { DocsLink } from 'src/reusable';

export default function Brands() {
	return (
		<div>
			{/* <CRow>
				<CCol xs='12' sm='6' md='4'>
					<CCard>
						<CCardHeader>
							Card title
							<DocsLink name='CCard' />
						</CCardHeader>
						<CCardBody>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit, sed diam nonummy nibh euismod tincidunt ut
							laoreet dolore magna aliquam erat volutpat. Ut wisi
							enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip ex ea
							commodo consequat.
						</CCardBody>
						<CCardFooter>
							<div className='right'>
								<CButton
									color='primary'
									className='float-right'>
									<CIcon name='cil-pencil' />
								</CButton>
								<CButton
									color='danger'
									className='float-right mr-3'>
									<CIcon name='cil-trash' />
								</CButton>
							</div>
						</CCardFooter>
					</CCard>
				</CCol>
			</CRow> */}
		</div>
	);
}
