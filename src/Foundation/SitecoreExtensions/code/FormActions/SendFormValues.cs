using System.Linq;
using Sitecore.Diagnostics;
using Sitecore.ExperienceForms.Models;
using Sitecore.ExperienceForms.Processing;
using Sitecore.ExperienceForms.Processing.Actions;
using Sitecore.Data.Items;
using static System.FormattableString;
using Sitecore.Links;
using Sitecore.ExperienceForms.Processing.Actions.Models;
using System;
using Sitecore.Data;
using Sitecore.Mvc.Extensions;

namespace Wedia.Foundation.SitecoreExtensions.FormActions
{
  public class SendFormValues : SubmitActionBase<RedirectActionData>
  {

    /// <summary>
    /// Initializes a new instance of the <see cref="LogSubmit"/> class.
    /// </summary>
    /// <param name="submitActionData">The submit action data.</param>
    public SendFormValues(ISubmitActionData submitActionData) : base(submitActionData)
    {
    }



    /// <summary>
    /// Executes the action with the specified <paramref name="data" />.
    /// </summary>
    /// <param name="data">The data.</param>
    /// <param name="formSubmitContext">The form submit context.</param>
    /// <returns>
    ///   <c>true</c> if the action is executed correctly; otherwise <c>false</c>
    /// </returns>
    protected override bool Execute(RedirectActionData data, FormSubmitContext formSubmitContext)
    {
      Assert.ArgumentNotNull(formSubmitContext, "formSubmitContext");
      if (data == null || !(data.ReferenceId != Guid.Empty))
        return false;
      var item = Sitecore.Context.Database.GetItem(new ID(data.ReferenceId));
      if (item == null)
        return false;

      var email = string.Empty;

      var field = formSubmitContext.Fields.FirstOrDefault(f => f.Name.Equals("Email"));
      if (field != null)
      {
        var property = field.GetType().GetProperty("Value");
        var postedEmail = property.GetValue(field);
        email = postedEmail.ToStringOrEmpty();
      }

      Logger.Info(Invariant($"Email was submitted and value is: {email}"), this);
      return true;
    }
  }
}