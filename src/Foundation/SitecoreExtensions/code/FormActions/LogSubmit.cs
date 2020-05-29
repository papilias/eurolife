using System.Linq;
using Sitecore.Diagnostics;
using Sitecore.ExperienceForms.Models;
using Sitecore.ExperienceForms.Processing;
using Sitecore.ExperienceForms.Processing.Actions;
using Sitecore.Data.Items;
using static System.FormattableString;
using Sitecore.Links;



namespace Wedia.Foundation.SitecoreExtensions.FormActions
{
  public class LogSubmit : SubmitActionBase<string>
  {

    /// <summary>
    /// Initializes a new instance of the <see cref="LogSubmit"/> class.
    /// </summary>
    /// <param name="submitActionData">The submit action data.</param>
    public LogSubmit(ISubmitActionData submitActionData) : base(submitActionData)
    {
    }

    /// <summary>
    /// Tries to convert the specified <paramref name="value" /> to an instance of the specified target type.
    /// </summary>
    /// <param name="value">The value.</param>
    /// <param name="target">The target object.</param>
    /// <returns>
    /// true if <paramref name="value" /> was converted successfully; otherwise, false.
    /// </returns>
    protected override bool TryParse(string value, out string target)
    {
      target = string.Empty;
      return true;
    }

    /// <summary>
    /// Executes the action with the specified <paramref name="data" />.
    /// </summary>
    /// <param name="data">The data.</param>
    /// <param name="formSubmitContext">The form submit context.</param>
    /// <returns>
    ///   <c>true</c> if the action is executed correctly; otherwise <c>false</c>
    /// </returns>
    protected override bool Execute(string data, FormSubmitContext formSubmitContext)
    {
      Assert.ArgumentNotNull(formSubmitContext, nameof(formSubmitContext));

      if (!formSubmitContext.HasErrors)
      {
        Logger.Info(Invariant($"Form {formSubmitContext.FormId} submitted successfully."), this);

  
        
        Item formItem = Sitecore.Context.Database.GetItem(Sitecore.Data.ID.Parse(formSubmitContext.FormId));
        //var pathInfo = LinkManager.GetItemUrl(formItem, UrlOptions.DefaultOptions);
        //return RedirectToRoute(MvcSettings.SitecoreRouteName, new { pathInfo = pathInfo.TrimStart(new char[] { '/' }), param1 = actionParam });



      }
      else
      {
        Logger.Warn(Invariant($"Form {formSubmitContext.FormId} submitted with errors: {string.Join(", ", formSubmitContext.Errors.Select(t => t.ErrorMessage))}."), this);
      }

      return true;
    }
  }
}