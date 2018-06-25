import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import { Footer } from 'src/components';
import { HomeIcon } from 'src/icons';
import { posts } from 'src/config';

export default class Home extends Component {
  state = {
  	posts
  };

  render() {
  	return (
  		<div>
  			<div class="flex flex-column items-center justify-between">
  				<div class="h4 flex items-center">
  					<Link id="home-icon-container" href="/"><HomeIcon /></Link>
  				</div>
  			</div>

  			{posts.ids.map(id => (
  				<div class="flex flex-column justify-between mw7 pv5 center bb">
  					<h5 class="f3 fw6 mb3 mt0 grow">
  						<Link
	href={`/${id}`}
	class="near-black link hover-primary-color grow ttl"
  						>
  							{posts[id].title}
  						</Link>
  					</h5>
  					<p class="f4 lh-copy mb0 near-black">
  						{posts[id].description}
  					</p>
  				</div>
  			))}

  			<Footer />
  		</div>
  	);
  }
}
