import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'

const AboutUs = ({ t }) => (
  <>
    <div>
      {t('about-us')}
    </div>
  </>
)

AboutUs.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

AboutUs.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(AboutUs)