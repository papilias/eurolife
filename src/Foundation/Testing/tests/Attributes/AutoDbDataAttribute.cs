using Ploeh.AutoFixture.AutoNSubstitute;
using Ploeh.AutoFixture.Kernel;
using Ploeh.AutoFixture.Xunit2;
using Sitecore.FakeDb.AutoFixture;
using Wedia.Foundation.Testing.Builders;
using Wedia.Foundation.Testing.Commands;

namespace Wedia.Foundation.Testing.Attributes
{
  public class AutoDbDataAttribute : AutoDataAttribute
  {
    public AutoDbDataAttribute()
    {
      this.Fixture.Customize(new AutoDbCustomization());
      this.Fixture.Customize(new AutoNSubstituteCustomization());
      this.Fixture.Customizations.Add(new Postprocessor(new ContentAttributeRelay(), new AddContentDbItemsCommand()));
      this.Fixture.Customizations.Insert(0, new RegisterViewToEngineBuilder());
      this.Fixture.Customizations.Add(new HtmlHelperBuilder());
      this.Fixture.Customizations.Add(new HttpContextBuilder());
    }
  }
}