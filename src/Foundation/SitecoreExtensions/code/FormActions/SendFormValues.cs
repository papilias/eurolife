using System;
using System.Linq;
using Sitecore.Diagnostics;
using Sitecore.ExperienceForms.Models;
using Sitecore.ExperienceForms.Processing;
using Sitecore.ExperienceForms.Processing.Actions;
using static System.FormattableString;
using Sitecore.Mvc.Extensions;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Wedia.Foundation.SitecoreExtensions.FormActions
{
  public class SendFormValues : SubmitActionBase<string>
  {

    /// <summary>
    /// Initializes a new instance of the <see cref="LogSubmit"/> class.
    /// </summary>
    /// <param name="submitActionData">The submit action data.</param>
    public SendFormValues(ISubmitActionData submitActionData) : base(submitActionData)
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
        try
        {

          //we need to add to values to a string dictionary 
          Dictionary<string, string> fieldsDictionary = new Dictionary<string, string>();

          foreach (var field in formSubmitContext.Fields)
          {

            string fieldName = field.Name;
            string fieldValue = FieldsHelper.GetFieldValue(field);

            fieldsDictionary.Add(fieldName, fieldValue);
          }   

          using (WebClient client = new WebClient())
          {
            var reqparm = new System.Collections.Specialized.NameValueCollection();

            foreach (var item in fieldsDictionary)
            {
              reqparm.Add(item.Key, item.Value);
            }    

            byte[] responsebytes = client.UploadValues(Sitecore.Configuration.Settings.GetSetting("FormActions.SalesforceApiUrl"), "POST", reqparm);
            string responsebody = Encoding.UTF8.GetString(responsebytes);
            string testreponsebody = responsebody;
          } 
        }
        catch (Exception ex)
        {
          Log.Error("SendValues form with id " + formSubmitContext.FormId + " error exception", ex, this);
        }       

      }
      else
      {
        Logger.Warn(Invariant($"Form {formSubmitContext.FormId} submitted with errors: {string.Join(", ", formSubmitContext.Errors.Select(t => t.ErrorMessage))}."), this);
      }

      return true;
    }
  }
}