import { PreDeliveryButtons } from '@/components'

export interface JavaScriptHomePageInterface {}

const JavaScriptHomePage: React.FC<JavaScriptHomePageInterface> = () => {
  return (
    <PreDeliveryButtons linkOne='/js/predeliveryone' linkTow='/js/predeliverytow' linkThree='/js/predeliverythree' />
  )
}

export default JavaScriptHomePage
