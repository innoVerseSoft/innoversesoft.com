import GridMotion from './GridMotion';
  
// note: you'll need to make sure the parent container of this component is sized properly
const items = [
  '/img/realistic-glassmorphism-mobile-app-template_23-2149441714.avif',
  '/img/realistic-glassmorphism-mobile-app-template_23-2149441714.avif',
  '/img/istockphoto-1418233376-612x612.jpg',
  '/img/professional-programmer-working-late-dark-office.jpg',
  '/img/4380747.jpg',
  '/img/various-screens-violet-public-transport-mobile-app_23-2148704862.avif',
  '/img/activity-feeds.jpg',
  '/img/istockphoto-1418233376-612x612.jpg',
  '/img/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg',
  '/img/pexels-pixabay-355952.jpg',
  '/img/side-shot-code-editor-using-react-js.jpg',
  '/img/professional-programmer-working-late-dark-office.jpg',
  '/img/4380747.jpg',
  '/img/4380747.jpg',
  '/img/4380747.jpg',
  '/img/4380747.jpg',
  '/img/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg',
  '/img/activity-feeds.jpg',

];

export default function GridMotionBg() {
  return <GridMotion items={items} gradientColor="lightblue"/>;
}