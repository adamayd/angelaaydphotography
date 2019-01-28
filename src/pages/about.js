import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="About" keywords={[`Angela Ayd Photography`, `about`]} />
    <div style={{textAlign: 'center'}}>
      <h4 style={{textTransform: 'uppercase'}}>Angela Ayd Photographer</h4>
      <p style={{color: 'grey'}}>Lorem ipsum dolor amet celiac synth microdosing health goth raclette +1 master cleanse kogi. PBR&amp;B typewriter mixtape gastropub tbh cronut bushwick lo-fi whatever thundercats messenger bag taxidermy cardigan. Sriracha health goth fashion axe brunch occupy dreamcatcher try-hard tacos taxidermy. Narwhal paleo fam butcher mlkshk swag. Photo booth enamel pin leggings, copper mug PBR&amp;B gochujang portland bitters mlkshk you probably haven't heard of them fingerstache flexitarian.</p>
    </div>
    <div style={{display: 'flex'}}>
      <h3 style={{flex: `1 0 33%`}}>Pricing</h3>
      <p style={{flex: `1 0 66%`}}>Lorem ipsum dolor amet celiac synth microdosing health goth raclette +1 master cleanse kogi. PBR&amp;B typewriter mixtape gastropub tbh cronut bushwick lo-fi whatever thundercats messenger bag taxidermy cardigan. Sriracha health goth fashion axe brunch occupy dreamcatcher try-hard tacos taxidermy. Narwhal paleo fam butcher mlkshk swag. Photo booth enamel pin leggings, copper mug PBR&amp;B gochujang portland bitters mlkshk you probably haven't heard of them fingerstache flexitarian.</p>
    </div>
    <div style={{display: 'flex'}}>
      <h3 style={{flex: `1 0 33%`}}>Gear</h3>
      <p style={{flex: `1 0 33%`}}>Lorem ipsum dolor amet celiac synth microdosing health goth raclette +1 master cleanse kogi. PBR&amp;B typewriter mixtape gastropub tbh cronut bushwick lo-fi whatever thundercats messenger bag taxidermy cardigan.</p>
      <p style={{flex: `1 0 33%`}}>Lorem ipsum dolor amet celiac synth microdosing health goth raclette +1 master cleanse kogi. PBR&amp;B typewriter mixtape gastropub tbh cronut bushwick lo-fi whatever thundercats messenger bag taxidermy cardigan.</p>
      </div>
  </Layout>
)