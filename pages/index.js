import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'

const Homepage = ({ t }) => (
  <>
    <div>
      {t('title')}
      <button
        type='button'
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
      >
        {t('change-locale')}
      </button>
      <Link href='/about-us' passHref>
        <a
          type='button'
        >
          to about us
        </a>
      </Link>
      <div>test cache</div>
    </div>
  </>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)