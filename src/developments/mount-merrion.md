---
header: 'Mount Merrion'
summary: 'Shaping the future of homebuilding'
location: 'mount-merrion'
developmentImg: '117a_hero_landing.jpg'
developmentImgAlt: '117a Barton Street, Dundrum'
---


<div class="container mb-5">
  <div class="row g-4 pt-5 pb-5">
    <div class="col-md-6">
      <div class="">
        <p>Oakwood Group proudly presents The Hazelwood Residence, a luxurious A-rated family home designed for modern living with a focus on sustainability and comfort. Just minutes from the vibrant village of Rathfarnham, this home blends contemporary elegance with traditional charm, set amidst a range of local amenities.</p>
        <p>Spanning 210 sq.m / 2,260 sq.ft, this home is thoughtfully crafted to cater to today’s lifestyle. The ground floor features a welcoming entrance hall, a spacious living room, a guest WC, and a light-filled, open-plan kitchen and dining area with large glass doors leading to a landscaped, south-facing garden.</p>
        <p>The kitchen is complemented by a fully fitted utility room, offering ample storage and convenience.cUpstairs, four well-appointed bedrooms await, including a master suite with an en suite bathroom and custom-built wardrobes. A family bathroom, featuring high-end fixtures, serves the additional bedrooms. An additional top-floor loft offers a versatile space for a home office, guest suite, or recreational area, complete with expansive windows and scenic views.</p>
        <p>Outdoors, the property boasts a granite-paved driveway, lush planting for privacy, and a south-facing garden perfect for outdoor entertaining. With parking for two vehicles, The Hazelwood Residence promises both style and practicality. Located within easy reach of schools, parks, and shopping, and well-served by public transport, this property offers an ideal combination of convenience and tranquility.</p>
        <div class="pt-5">
          <a class="btn btn-primary btn-lg" href="/brochure">Download Brochure</a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-4 text-center">
          <div class="col">
            <div class="p-3 bg-info-subtle">            
              <div class="property-feature-icon"></div>
              <div class="property-feature-label"></div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 bg-info-subtle">
              <div class="property-feature-icon"></div>
              <div class="property-feature-label"></div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 bg-info-subtle">
              <div class="property-feature-icon"></div>
              <div class="property-feature-label"></div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 bg-info-subtle">
              <div class="property-feature-icon"></div>
              <div class="property-feature-label"></div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 bg-info-subtle">
              <div class="property-feature-icon"></div>
              <div class="property-feature-label"></div>
            </div>
          </div>
          <div class="col">
            <div class="p-3 bg-info-subtle">
              <div class="property-feature-icon"></div>
              <div class="property-feature-label"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{# PHOTO GALLERY BELOW #}
<div class="container pb-5 mb-5">
  <h2 class="fw-bold mb-5" data-cue="fadeIn">Photography Gallery</h2>
  <div class="row g-4">
    <div class="col-12">
      <div class="">
        <img src="/images/developments/dundrum/117a_gallery_1.jpg" alt="117a Gallery Image 1">
      </div>
    </div>    
    <div class="col-12 col-md-6">
     <div class="">
        <img src="/images/developments/dundrum/117a_gallery_2.jpg" alt="117a Gallery Image 1">
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="">
        <img src="/images/developments/dundrum/117a_gallery_3.jpg" alt="117a Gallery Image 1">
      </div>
    </div>
    <div class="col-12">
      <div class="">
        <img src="/images/developments/dundrum/117a_gallery_4.jpg" alt="117a Gallery Image 1">
      </div>
    </div>    
    <div class="col-12 col-md-4">
      <div class="">
        <img src="/images/developments/dundrum/117a_gallery_5.jpg" alt="117a Gallery Image 1">
      </div>
    </div>
    <div class="col-12 col-md-8">
      <div class="">
        <img src="/images/developments/dundrum/117a_gallery_6.jpg" alt="117a Gallery Image 1">
      </div>
    </div>
  </div>
</div>

{# LOCATION #}
<div class="container pb-5 mb-5">
  <h2 class="fw-bold mb-5">Photography Gallery</h2>
  <div class="row g-4">
    <div class="col-12">
      <div id="map-dundrum" class="p-3" style="height:700px">Contact Map</div>
    </div>
  </div>
</div>
<script>
  var map = L.map("map-dundrum").setView([53.287438, -6.254583], 17);
  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);
  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [45, 120],
    },
  });
  var greenIcon = new LeafIcon({
    iconUrl: "/images/marker.svg",
  });
  L.marker([53.287438, -6.254583], { icon: greenIcon })
    .bindPopup(
      "117 Barton Rd E, Churchtown Upper, Dublin 14, D14 C9Y7"
    )
    .addTo(map);
</script>


{# {% include "components/development_details.html" %} #}




