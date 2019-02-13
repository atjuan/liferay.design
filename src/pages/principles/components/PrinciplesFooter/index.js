import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Link } from 'gatsby'

const PrinciplesFooter = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerBadgeOuterCircle}>
				<Link to="/">
					<div className={styles.footerBadgeCircle}>
						<svg width="238" height="238" viewBox="0 0 238 238" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.footerBadge}>
							<path id="topCurve" d="M15 120C15 60.5 66 18 119 18C172 18 223 62 223 120" stroke="none"/>
							<path id="bottomCurve" d="M15 120.5C15 179.5 60.7281 225.5 119 225.5C177.272 225.5 223 181 223 120.5" stroke="none"/>
							<text style={{
								fill:"#fff",
								fonFamily:"Source Sans Pro",
								fontStyle:"normal",
								fontWeight: "bold",
								lineHeight: "normal",
								fontSize: "16px",
								textAlign: "center",
								letterSpacing: "2px",
								textTransform: "uppercase"

							}}> 
								<textPath
									startOffset="52%" 
									href="#topCurve" 
									textAnchor= "middle"
									dominantBaseline="middle" >
								Liferay Inc.
								</textPath>
								<textPath
									startOffset="50%" 
									href="#bottomCurve"
									textAnchor= "middle"
									dominantBaseline="middle" 
									style={{
										transform:"translateY(18px)"}}>
								Design Principles
								</textPath>
							</text>
							<g transform="scale(.67) translate(58 58)">
								<path fillRule="evenodd" clipRule="evenodd" d="M71 81.1111C71 77.1838 74.1838 74 78.1111 74H159.889C163.816 74 167 77.1838 167 81.1111V162.889C167 166.816 163.816 170 159.889 170H78.1111C74.1838 170 71 166.816 71 162.889V81.1111ZM85.2222 90C85.2222 89.0182 86.0181 88.2222 87 88.2222H97.6667C98.6485 88.2222 99.4444 89.0182 99.4444 90V100.667C99.4444 101.649 98.6485 102.444 97.6667 102.444H87C86.0181 102.444 85.2222 101.649 85.2222 100.667V90ZM104.778 88.2222C103.796 88.2222 103 89.0182 103 90V100.667C103 101.649 103.796 102.444 104.778 102.444H115.444C116.426 102.444 117.222 101.649 117.222 100.667V90C117.222 89.0182 116.426 88.2222 115.444 88.2222H104.778ZM120.778 90C120.778 89.0182 121.574 88.2222 122.556 88.2222H133.222C134.204 88.2222 135 89.0182 135 90V100.667C135 101.649 134.204 102.444 133.222 102.444H122.556C121.574 102.444 120.778 101.649 120.778 100.667V90ZM87 106C86.0181 106 85.2222 106.796 85.2222 107.778V118.444C85.2222 119.426 86.0181 120.222 87 120.222H97.6667C98.6485 120.222 99.4444 119.426 99.4444 118.444V107.778C99.4444 106.796 98.6485 106 97.6667 106H87ZM103 107.778C103 106.796 103.796 106 104.778 106H115.444C116.426 106 117.222 106.796 117.222 107.778V118.444C117.222 119.426 116.426 120.222 115.444 120.222H104.778C103.796 120.222 103 119.426 103 118.444V107.778ZM140.333 106C139.351 106 138.556 106.796 138.556 107.778V118.444C138.556 119.426 139.351 120.222 140.333 120.222H151C151.982 120.222 152.778 119.426 152.778 118.444V107.778C152.778 106.796 151.982 106 151 106H140.333ZM85.2222 125.556C85.2222 124.574 86.0181 123.778 87 123.778H97.6667C98.6485 123.778 99.4444 124.574 99.4444 125.556V136.222C99.4444 137.204 98.6485 138 97.6667 138H87C86.0181 138 85.2222 137.204 85.2222 136.222V125.556ZM122.556 123.778C121.574 123.778 120.778 124.574 120.778 125.556V136.222C120.778 137.204 121.574 138 122.556 138H133.222C134.204 138 135 137.204 135 136.222V125.556C135 124.574 134.204 123.778 133.222 123.778H122.556ZM138.556 125.556C138.556 124.574 139.351 123.778 140.333 123.778H151C151.982 123.778 152.778 124.574 152.778 125.556V136.222C152.778 137.204 151.982 138 151 138H140.333C139.351 138 138.556 137.204 138.556 136.222V125.556ZM104.778 141.556C103.796 141.556 103 142.351 103 143.333V154C103 154.982 103.796 155.778 104.778 155.778H115.444C116.426 155.778 117.222 154.982 117.222 154V143.333C117.222 142.351 116.426 141.556 115.444 141.556H104.778ZM120.778 143.333C120.778 142.351 121.574 141.556 122.556 141.556H133.222C134.204 141.556 135 142.351 135 143.333V154C135 154.982 134.204 155.778 133.222 155.778H122.556C121.574 155.778 120.778 154.982 120.778 154V143.333ZM140.333 141.556C139.351 141.556 138.556 142.351 138.556 143.333V154C138.556 154.982 139.351 155.778 140.333 155.778H151C151.982 155.778 152.778 154.982 152.778 154V143.333C152.778 142.351 151.982 141.556 151 141.556H140.333Z" fill="white"/>
							</g>
							</svg>
					</div>
				</Link>
			</div>
			<div className={styles.footerLowerCircle} />
		</div>
	)
}

export default PrinciplesFooter
