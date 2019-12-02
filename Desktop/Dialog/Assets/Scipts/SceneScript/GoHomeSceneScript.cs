using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GoHomeSceneScript : MonoBehaviour {

	public void GoHomeSceneChange() {
		Debug.Log("버튼눌림");
		SceneManager.LoadScene("GoHomeScene");
	}
}
