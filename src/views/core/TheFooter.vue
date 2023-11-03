<template>
	<footer class="border-top border-2 border-primary py-15">
		<div class="container-fluid">
			<div class="d-flex flex-column flex-md-row justify-content-between align-items-end mb-10 mb-md-8">
				<a href="#" class="brand-logo me-auto">
					<TheIcon :path="'../../../src/assets/images/brand-logo.svg'" />
				</a>
				<ul class="d-flex flex-wrap me-auto me-md-0 mt-10 mt-md-0">
					<li><a href="https://www.facebook.com/IVFOrlando/">
							<TheIcon :path="'../../src/assets/images/icon-facebook.svg'" />
						</a></li>
				</ul>
			</div>
			<a href="https://connect.preludeconnect.com/auth/login?redirect=%2F"
				class="strong text-primary mb-5 d-none d-md-inline-block ">Log into Prelude Connect</a>
			<div class="row flex-column flex-md-row item-footer">
				<div class="column-1 order-1 d-md-none d-xl-inline-block">
					<small class="strong text-primary mb-1">About Us</small>
					<nav>
						<ul>
							<li><a href="about">About CRM</a></li>
							<li><a href="about/facilities-location">Our Facilities and Locations</a></li>
							<li><a href="about/success-rate">Success Rates</a></li>
							<li><a href="providers">Providers</a></li>
							<li><a href="referring-providers">Referring Providers</a></li>
						</ul>
					</nav>
				</div>
				<div class="column-2 order-2">
					<small class="strong text-primary mb-1">Fertility Treatments</small>
					<nav>
						<ul>
							<li><a href="fertility">Fertility Treatments</a></li>
							<li><a href="fertility/hsg">Hysterosalpingogram (HSG)</a></li>
							<li><a href="fertility/ivf">In Vitro Fertilization (IVF)</a></li>
							<li><a href="fertility/fertility-preservation-men">Fertility Preservation Men</a></li>
							<li><a href="fertility/fertility-preservation-women">Fertility Preservation Women</a></li>
							<li><a href="fertility/elective-egg-freezing">Elective Egg Freezing</a></li>
							<li><a href="fertility/modified-natural-ivf">Modified Natural IVF</a></li>
							<li><a href="fertility/micromanipulation">Micromanipulation</a></li>
							<li><a href="fertility/iui">Intrauterine Insemination (IUI)</a></li>
							<li><a href="fertility/fertility-medications">Fertility Medications</a></li>
							<li><a href="fertility/minimally-invasive-robotic-surgery">Minimally Invasive Robotic
									Surgery</a></li>
							<li><a href="fertility/miscarriage">Miscarriage</a></li>
							<li><a href="fertility/genetic-testing">Genetic Testing</a></li>
							<li><a href="fertility/genetic-screening">Genetic Screening</a></li>
						</ul>
					</nav>
				</div>
				<div class="column-3 order-3">
					<small class="strong text-primary mb-1">Understanding Infertility</small>
					<nav>
						<ul>
							<li><a href="infertility">Understanding Infertility</a></li>
							<li><a href="infertility/testing">Fertility Testing</a></li>
							<li><a href="infertility/male">Male Infertility</a></li>
							<li><a href="infertility/female">Female Infertility</a></li>
						</ul>
					</nav>
				</div>
				<div class="column-6 order-6">
					<small class="strong text-primary mb-1">Egg Donation</small>
					<nav>
						<ul>
							<li><a href="egg-donation">Egg Donation</a></li>
							<li><a href="egg-donation/eggdonor">Become a Donor</a></li>
							<li><a href="egg-donation/gestational-carrier">Gestational Carrier</a></li>
							<li><a href="egg-donation/crm-egg-bank">About CRM’s Egg Bank</a></li>
						</ul>
					</nav>
				</div>
				<div class="column-4 order-7">
					<small class="strong text-primary mb-1">Our Locations</small>
					<nav>
						<ul>
							<li>
								<address class="text-primary"><span class="fw-bold">Winter Park</span> <br>1500 S Orlando
									Ave, <br>Winter Park, FL 32789,<br>(321)-334-2044</address>
							</li>
							<li>
								<address class="text-primary"><span class="fw-bold">Celebration</span> <br>410 Celebration
									Place, <br>Suite 205, FL 34747,<br>(321)-334-2044</address>
							</li>
						</ul>
					</nav>
				</div>
				<!-- <div class="column-4 order-4">
				<small class="strong text-primary mb-1">Patient Information</small>
				<nav>
					<ul>
						<li><a href="patient">Patient Information</a></li>
						<li><a href="patient/faq">Patient FAQs</a></li>
						<li><a href="patient/covid-19">COVID-19</a></li>
						<li><a href="patient/telemedicine-consultation">Telemedicine Consultations</a></li>
						<li><a href="patient/fertility-support">Fertility Support</a></li>
					</ul>
				</nav>
			</div> -->
				<div class="column-5 order-5">
					<small class="strong text-primary mb-1">Financing Options</small>
					<nav>
						<ul>
							<!-- <li><a href="finance">Financing Options</a></li> -->
							<li><a href="finance/insurance">Insurances</a></li>
						</ul>
					</nav>
				</div>
				<!-- <div class="column-7 order-8 d-md-none d-xl-inline-block">
				<small class="strong text-primary mb-1">Blog</small>
			</div> -->
			</div>
			<div class="d-flex flex-wrap justify-content-md-end text-md-end mt-15 mt-md-23 mt-xl-5">
				<ul class="small link-cms d-flex flex-wrap justify-content-md-end w-100 mb-5">
					<!-- <li><a href="accessibility-notice">Accessibility Notice</a></li> -->
					<li><a href="privacy-policy">Privacy Policy</a></li>
					<li><a href="terms-conditions">Terms and Conditions</a></li>
				</ul>
				<span>© {{ year }} Prelude Fertility, Inc.All rights reserved.</span>
			</div>
		</div>
	</footer>
</template>
<script setup>
import TheIcon from '../../components/TheIcon.vue';

const year = new Date().getFullYear();
</script>
<style></style>