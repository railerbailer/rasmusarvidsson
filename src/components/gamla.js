import React from 'react'

const Timeline = () => (
   <section className="timeline">
	<h1>A Flexbox Timeline</h1>
	<p className="leader">All cards must be the same height and width for space calculations on large screens.</p>
	<div className="demo-card-wrapper">



		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span>2017-2018</span>
				</div>
				<h2><span className="small">Exchange Student</span>JKU Linz</h2>
			</div>
			<div className="body">
				<p>
				Master level studies with a strong relation to web engineering. Studies ending 1/2-2018.
				</p>
				
			</div>
		</div>

		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span>2017-2018</span>
				</div>
				<h2><span className="small">Södertörn University</span> Student</h2>
			</div>
			<div className="body">
				<p>
					International macro- and microeconomics (30 credits)				</p>
				{/*<img src="http://placehold.it/1000x500" alt="Graphic"/>*/}
			</div>
		</div>

		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span>2015-2018</span>
				</div>
				<h2><span className="small">University of Skövde</span>Student</h2>
			</div>
			<div className="body">
				<p>
					International macro- and microeconomics (30 credits)				</p>
				{/*<img src="http://placehold.it/1000x500" alt="Graphic"/>*/}
			</div>
		</div>

		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span>2014-2015</span>
				</div>
				<h2><span className="small">Södertörn University</span> Student</h2>
			</div>
			<div className="body">
				<p>
					International macro- and microeconomics (30 credits)				</p>
				{/*<img src="http://placehold.it/1000x500" alt="Graphic"/>*/}
			</div>
		</div>	

		<div className="demo-card demo-card--step1">
			<div className="head">
				<div className="number-box">
					<span>2012-2014</span>
				</div>
				<h2><span className="small">Circle K Europe</span>Plant Manager</h2>
			</div>
			<div className="body">
				<p>

					Working in a tight team with the Plant manager. Responsibilities included recruitment, general management of staff, security (in case of fire, etc), day to day sales coaching and accounting.
				
				</p>
				
			</div>
		</div>				

		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span>2013-2014</span>
				</div>
				<h2><span className="small">Circle K Leadership program</span>Student/Practice</h2>
			</div>
			<div className="body">
				<p>
					Chosen as one of the few prospects for education from a 
      private enterprise institute for potential future leaders of the organization.				</p>
				{/*<img src="http://placehold.it/1000x500" alt="Graphic"/>*/}
			</div>
		</div>		

		<div className="demo-card demo-card--step1">
			<div className="head">
				<div className="number-box">
					<span>2011-2012</span>
				</div>
				<h2><span className="small">Kläd-In AB</span>E-commerce Manager</h2>
			</div>
			<div className="body">
				    <p>Responsible for starting and up the e-commerce side of the business and maintaining it using an open-source e-commerce software. Responisbilities included inventory management, marketing aswell as technical administration.</p>

				
			</div>
		</div>
		<div className="demo-card demo-card--step1">
			<div className="head">
				<div className="number-box">
					<span>2011-2011</span>
				</div>
				<h2><span className="small">Statoil Retail</span>Sales Coach</h2>
			</div>
			<div className="body">
				<p>

    				Traveled around to diffrent stores coaching around Sweden, coaching sales persons and managers to better their sales figures. 
				
				</p>
				
			</div>
		</div>
		<div className="demo-card demo-card--step1">
			<div className="head">
				<div className="number-box">
					<span>2007-2011</span>
				</div>
				<h2><span className="small">Statoil Retail</span>Sales Person</h2>
			</div>
			<div className="body">
				<p>
					Responsible for customer management.				
				</p>
				
			</div>
		</div>


    
	</div>
</section>
)

export default Timeline;