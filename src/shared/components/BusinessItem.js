function BusinessItem() {
	return (
		<div className="col-sm-4">
			<div className="card text-bg-light">
				<img
					src={"./images/Y's Boba Shop.jpg"}
					className="img-fluid"
					alt="Example image"
				/>
				<div className="card-body">
					<a href="#" className="stretched-link"></a>
					<div className="row align-items-center text-left">
						<div className="col-12">
							<div className="d-flex align-items-center">
								<h3 className="text-decoration-none text-secondary">
									Fried Chicken Restaurant
								</h3>
								<button className="btn btn-outline-primary ml-auto">
									<i className="bi bi-heart"></i>
								</button>
							</div>
							<a className="text-decoration-none text-secondary">
								4321 That St, That City, TS 01010
							</a>
							<br />
							<a className="text-decoration-none text-primary">$567,000</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessItem;
