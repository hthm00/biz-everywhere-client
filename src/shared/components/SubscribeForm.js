import { Form, FormControl, Button } from "react-bootstrap";

function SubscribeForm() {
	return (
		<Form className="form-inline ml-auto">
			<div className="input-group">
				<FormControl type="email" placeholder="email@address.com" />
				<div className="input-group-append">
					<Button variant="primary" type="submit">
						Subscribe
					</Button>
				</div>
			</div>
		</Form>
	);
}

export default SubscribeForm;
